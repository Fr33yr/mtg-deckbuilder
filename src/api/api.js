import axios from 'axios'

export const getCards = async (name, type, color) => {
    try{
        const {data} = await axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}&type=${type}&colorIdentity=${color}`)
        return data.cards
    } catch (error) {
        return error
    }
}