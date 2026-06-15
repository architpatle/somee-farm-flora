import React from 'react'
import QualityHero from '../components/QualityHero'
import QualityCommitment from '../components/QualityCommitment'
import QualityProcess from '../components/QualityProcess'
import QualityCertifications from '../components/QualityCertifications'
import QualityCTA from '../components/QualityCTA'

const Quality = () => {
    return (
        <div>
            <QualityHero />
            <QualityCommitment />
            <QualityProcess />
            <QualityCertifications />
            <QualityCTA />
        </div>
    )
}

export default Quality
