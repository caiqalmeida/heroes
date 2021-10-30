import React, { } from 'react'

import './styles.scss'

const DetailsModal = ({ closeModal, hero }) => {
  return (
    <>
      {Object.keys(hero).length && (
        <div className='details-modal'>
          <div className='details-modal__close-container'>
            <button className='details-modal__close-container__button' onClick={closeModal}>x</button>
          </div>
          <div className='details-modal__content'>

            <div className='details-modal__content__row'>
              <img src={hero?.image?.url} alt={hero?.name} />
              <div className='details-modal__content__column'>
                <h1 className='details-modal__content__title'>{hero?.name}</h1>
                <div className='details-modal__content__row'>
                  <section className='details-modal__content__section'>
                    <h3>Power Stats</h3>
                    <p><span>Intelligence: </span>{hero?.powerstats?.intelligence}</p>
                    <p><span>Strength: </span>{hero?.powerstats?.strength}</p>
                    <p><span>Speed: </span>{hero?.powerstats?.speed}</p>
                    <p><span>Durability: </span>{hero?.powerstats?.durability}</p>
                    <p><span>Power: </span>{hero?.powerstats?.power}</p>
                    <p><span>Combat: </span>{hero?.powerstats?.combat}</p>
                  </section>

                  <section className='details-modal__content__section'>
                    <h3>Biography</h3>
                    <p><span>Full name: </span>{hero?.biography?.['full-name'] || ''}</p>
                    <p><span>Alter egos: </span>{hero?.biography?.['alter-egos'] || ''}</p>
                    <p><span>Aliases: </span>{hero?.biography?.aliases?.map((alias) => ` ${alias},`)}</p>
                    <p><span>Place of birth: </span>{hero?.biography?.['place-of-birth'] || ''}</p>
                    <p><span>First Appearance: </span>{hero?.biography?.['first-appearance'] || ''}</p>
                    <p><span>Publisher: </span>{hero?.biography?.publisher}</p>
                    <p><span>Alignment: </span>{hero?.biography?.alignment}</p>
                  </section>

                  <div className='details-modal__content__column'>
                    <section className='details-modal__content__section'>
                      <h3>Work</h3>
                      <p><span>Occupation: </span>{hero?.work?.occupation}</p>
                      <p><span>Base: </span>{hero?.work?.base}</p>
                    </section>
                    <section className='details-modal__content__section'>
                      <h3>Appearance</h3>
                      <p><span>Gender: </span>{hero?.appearance?.gender}</p>
                      <p><span>Race: </span>{hero?.appearance?.race}</p>
                      <p><span>Height: </span>{hero?.appearance?.height.map((height) => `${height} `)}</p>
                      <p><span>Weight: </span>{hero?.appearance?.weight.map((weight) => `${weight} `)}</p>
                      <p><span>Eye color: </span>{hero?.appearance?.['eye-color'] || ''}</p>
                      <p><span>Hair color: </span>{hero?.appearance?.['hair-color'] || ''}</p>
                    </section>
                  </div>

                </div>
              </div>
            </div>

            <div className='details-modal__content__row'>

              <section className='details-modal__content__section'>
                <h3>Biography</h3>
                <p><span>Full name: </span>{hero?.biography?.['full-name'] || ''}</p>
                <p><span>Alter egos: </span>{hero?.biography?.['alter-egos'] || ''}</p>
                <p><span>Aliases: </span>{hero?.biography?.aliases?.map((alias) => ` ${alias},`)}</p>
                <p><span>Place of birth: </span>{hero?.biography?.['place-of-birth'] || ''}</p>
                <p><span>First Appearance: </span>{hero?.biography?.['first-appearance'] || ''}</p>
                <p><span>Publisher: </span>{hero?.biography?.publisher}</p>
                <p><span>Alignment: </span>{hero?.biography?.alignment}</p>
              </section>

            </div>

            <div className='details-modal__content__row' />
            <section className='details-modal__content__section'>
              <h3>Connections</h3>
              <p><span>Group Affilliation: </span>{hero?.connections?.['group-affiliation']}</p>
              <p><span>Relatives: </span>{hero?.connections?.relatives}</p>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailsModal
