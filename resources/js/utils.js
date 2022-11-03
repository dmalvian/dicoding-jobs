import Moment from 'moment';

const formatDate = (date) => Moment(date).format('DD MMMM YYYY');

const formatContractType = (contractType) => {
    const contractTypes = {
        fulltime: 'Full-Time',
        freelance: 'Freelance',
        intern: 'Internship',
        remote: 'Bisa Remote',
    }

    return contractTypes[contractType];
}

const formatExperience = (experience) => {
    const experiences = {
        'freshgraduate': 'Freshgraduate',
        '1-3': '1-3 tahun pengalaman',
        '3-5': '3-5 tahun pengalaman',
        '5-10': '5-10 tahun pengalaman',
        '>10': '>10 tahun pengalaman',
    }

    return experiences[experience];
}

export {
    formatDate,
    formatContractType,
    formatExperience,
}