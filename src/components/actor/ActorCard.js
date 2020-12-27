import React from 'react'
import { StyledActorCard } from './ActorCardstyled'

const ActorCard = ({ image, name, gender, birthday, country, deathday }) => (
        <StyledActorCard>
            <div className="img-wrapper">
                <img src={image} alt="actor" />
                <h1>
                    {name} {gender ? (`${gender}`) : null}
                </h1>
                <p>
                    {country ? `Comes from ${country}` : 'No country known'}
                </p>
                {birthday ? <p>Born {birthday}</p> : null}
                <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
            </div>
        </StyledActorCard>
    )

export default ActorCard
