import React, { useEffect, useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
        const [starred] = useShows()

        const [shows, setShows] = useState(true);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            if(starred && starred.length > 0) {
                const promise = starred.map(showId => apiGet(`/shows/${showId}`))

                Promise.all(promise)
                .then(apiData => apiData.map(show => ({show})))
                .then(results => {
                    setShows(results);
                    setIsLoading(false)
                }).catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                })
            } else {
                setIsLoading(false);
            }
        }, [starred])

    return <MainPageLayout>
        {isLoading && <div>Shows are still loading</div>}
        {error && <div>Error occurred: {error}</div>}
        {isLoading && !shows && <div>No shows were added</div>}
        {!isLoading && !error && <ShowGrid data={shows} />}
    </MainPageLayout>
}

export default Starred
