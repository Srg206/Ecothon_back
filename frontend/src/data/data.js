
import trainings from '../shared/assets/interests/trainings.png'
import environmental from '../shared/assets/interests/environmental.png'
import ecoresearch from '../shared/assets/interests/ecoresearch.png'
import ecotourism from '../shared/assets/interests/ecotourism.png'
import volunteering from '../shared/assets/interests/volunteering.png'
import museums from '../shared/assets/interests/museums.png'
import ecofestivals from '../shared/assets/interests/ecofestivals.png'
import ecomovements from '../shared/assets/interests/ecomovements.png'
import conferences from '../shared/assets/interests/conferences.png'
import contests from '../shared/assets/interests/contests.png'
import masterclasses from '../shared/assets/interests/masterclasses.png'
import ecocafe from '../shared/assets/interests/ecocafe.png'

export default class data{
    
    static getInterests(){
        const interests = [
            {
                text: "тренинги и семинары",
                image: trainings,
            },
            {
                text: "природоохранные акции",
                image: environmental,
            },
            {
                text: "эко-исследования",
                image: ecoresearch,
            },
            {
                text: "волонтёрство",
                image: volunteering,
            },
            {
                text: "эко-туризм",
                image: ecotourism,
            },
            {
                text: "выставки и музеи",
                image: museums,
            },
            {
                text: "эко-фестивали",
                image: ecofestivals,
            },
            {
                text: "эко-движения",
                image: ecomovements,
            },
            {
                text: "научные конференции",
                image: conferences,
            },
            {
                text: "форумы и конкурсы",
                image: contests,
            },
            {
                text: "эко-магазины и кафе",
                image: ecocafe,
            },
            {
                text: "мастер-классы и воркшопы",
                image: masterclasses,
            },

        ]
        return interests;
    }
}