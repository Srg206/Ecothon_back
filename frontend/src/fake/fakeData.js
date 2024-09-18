
import eventImage from '../shared/assets/event.png'
import userAvatar from '../shared/assets/userAvatar.jpg'

export default class fake{

    static getEvents(){

        const events = [
        {
            id: 1,
            title: "Событие 1",
            date: "5 октября 2024, 10.00",
            address: "ул. Пушкина, д. 1",
            organization: "Организация 1",
            feedbacks: [
            { username: "Пользователь 1", comment: "Зелёный Марш — это то, что я давно искала! Я была в восторге от организации и количества участников. Мы не только высадили деревья, но и узнали много нового о городской экологии. В следующем году обязательно снова приду!", avatar: userAvatar },
            { username: "Пользователь 2", comment: "Комментарий 2", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег1", "тег2", "тег3"],
            description: "Описание события 1...",
            isFavorite: false
        },
        {
            id: 2,
            title: "Событие 2",
            date: "5 октября 2024, 10.00",
            address: "ул. Ленина, д. 2",
            organization: "Организация 2",
            feedbacks: [
            { username: "Пользователь 1", comment: "Комментарий 1", avatar: userAvatar },
            { username: "Пользователь 3", comment: "Комментарий 3", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег4", "тег5", "тег6"],
            description: "Описание события 2...",
            isFavorite: true
        },
        {
            id: 3,
            title: "Событие 3",
            date: "5 октября 2024, 10.00",
            address: "ул. Пушкина, д. 3",
            organization: "Организация 3",
            feedbacks: [
            { username: "Пользователь 4", comment: "Комментарий 4", avatar: userAvatar },
            { username: "Пользователь 5", comment: "Комментарий 5", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег7", "тег8", "тег9"],
            description: "Описание события 3...",
            isFavorite: false
        },
        {
            id: 4,
            title: "Событие 4",
            date: "5 октября 2024, 10.00",
            address: "ул. Лермонтова, д. 4",
            organization: "Организация 4",
            feedbacks: [
            { username: "Пользователь 6", comment: "Комментарий 6", avatar: userAvatar },
            { username: "Пользователь 7", comment: "Комментарий 7", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег10", "тег11", "тег12"],
            description: "Описание события 4...",
            isFavorite: true
        },
        {
            id: 5,
            title: "Событие 5",
            date: "5 октября 2024, 10.00",
            address: "ул. Толстого, д. 5",
            organization: "Организация 5",
            feedbacks: [
            { username: "Пользователь 8", comment: "Комментарий 8", avatar: userAvatar },
            { username: "Пользователь 9", comment: "Комментарий 9", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег13", "тег14", "тег15"],
            description: "Описание события 5...",
            isFavorite: false
        },
        {
            id: 6,
            title: "Событие 6",
            date: "5 октября 2024, 10.00",
            address: "ул. Чехова, д. 6",
            organization: "Организация 6",
            feedbacks: [
            { username: "Пользователь 10", comment: "Комментарий 10", avatar: userAvatar },
            { username: "Пользователь 11", comment: "Комментарий 11", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег16", "тег17", "тег18"],
            description: "Описание события 6...",
            isFavorite: true
        },
        {
            id: 7,
            title: "Событие 7",
            date: "5 октября 2024, 10.00",
            address: "ул. Гоголя, д. 7",
            organization: "Организация 7",
            feedbacks: [
            { username: "Пользователь 12", comment: "Комментарий 12", avatar: userAvatar },
            { username: "Пользователь 13", comment: "Комментарий 13", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег19", "тег20", "тег21"],
            description: "Описание события 7...",
            isFavorite: false
        },
        {
            id: 8,
            title: "Событие 8",
            date: "5 октября 2024, 10.00",
            address: "ул. Тургенева, д. 8",
            organization: "Организация 8",
            feedbacks: [
            { username: "Пользователь 14", comment: "Комментарий 14", avatar: userAvatar },
            { username: "Пользователь 15", comment: "Комментарий 15", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег22", "тег23", "тег24"],
            description: "Описание события 8...",
            isFavorite: true
        },
        {
            id: 9,
            title: "Событие 9",
            date: "5 октября 2024, 10.00",
            address: "ул. Достоевского, д. 9",
            organization: "Организация 9",
            feedbacks: [
            { username: "Пользователь 16", comment: "Комментарий 16", avatar: userAvatar },
            { username: "Пользователь 17", comment: "Комментарий 17", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег25", "тег26", "тег27"],
            description: "Описание события 9...",
            isFavorite: false
        },
        {
            id: 10,
            title: "Событие 10",
            date: "5 октября 2024, 10.00",
            address: "ул. Грибоедова, д. 10",
            organization: "Организация 10",
            feedbacks: [
            { username: "Пользователь 18", comment: "Комментарий 18", avatar: userAvatar },
            { username: "Пользователь 19", comment: "Комментарий 19", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег28", "тег29", "тег30"],
            description: "Описание события 10...",
            isFavorite: true
        },
        {
            id: 11,
            title: "Событие 11",
            date: "5 октября 2024, 10.00",
            address: "ул. Некрасова, д. 11",
            organization: "Организация 11",
            feedbacks: [
            { username: "Пользователь 20", comment: "Комментарий 20", avatar: userAvatar },
            { username: "Пользователь 21", comment: "Комментарий 21", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег31", "тег32", "тег33"],
            description: "Описание события 11...",
            isFavorite: false
        },
        {
            id: 12,
            title: "Событие 12",
            date: "5 октября 2024, 10.00",
            address: "ул. Твардовского, д. 12",
            organization: "Организация 12",
            feedbacks: [
            { username: "Пользователь 22", comment: "Комментарий 22", avatar: userAvatar },
            { username: "Пользователь 23", comment: "Комментарий 23", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег34", "тег35", "тег36"],
            description: "Описание события 12...",
            isFavorite: true
        },
        {
            id: 13,
            title: "Событие 13",
            date: "5 октября 2024, 10.00",
            address: "ул. Жуковского, д. 13",
            organization: "Организация 13",
            feedbacks: [
            { username: "Пользователь 24", comment: "Комментарий 24", avatar: userAvatar },
            { username: "Пользователь 25", comment: "Комментарий 25", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег37", "тег38", "тег39"],
            description: "Описание события 13...",
            isFavorite: false
        },
        {
            id: 14,
            title: "Событие 14",
            date: "5 октября 2024, 10.00",
            address: "ул. Королева, д. 14",
            organization: "Организация 14",
            feedbacks: [
            { username: "Пользователь 26", comment: "Комментарий 26", avatar: userAvatar },
            { username: "Пользователь 27", comment: "Комментарий 27", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег40", "тег41", "тег42"],
            description: "Описание события 14...",
            isFavorite: true
        },
        {
            id: 15,
            title: "Событие 15",
            date: "5 октября 2024, 10.00",
            address: "ул. Гагарина, д. 15",
            organization: "Организация 15",
            feedbacks: [
            { username: "Пользователь 28", comment: "Комментарий 28", avatar: userAvatar },
            { username: "Пользователь 29", comment: "Комментарий 29", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег43", "тег44", "тег45"],
            description: "Описание события 15...",
            isFavorite: false
        },
        {
            id: 16,
            title: "Событие 16",
            date: "5 октября 2024, 10.00",
            address: "ул. Вавилова, д. 16",
            organization: "Организация 16",
            feedbacks: [
            { username: "Пользователь 30", comment: "Комментарий 30", avatar: userAvatar },
            { username: "Пользователь 31", comment: "Комментарий 31", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег46", "тег47", "тег48"],
            description: "Описание события 16...",
            isFavorite: true
        },
        {
            id: 17,
            title: "Событие 17",
            date: "5 октября 2024, 10.00",
            address: "ул. Менделеева, д. 17",
            organization: "Организация 17",
            feedbacks: [
            { username: "Пользователь 32", comment: "Комментарий 32", avatar: userAvatar },
            { username: "Пользователь 33", comment: "Комментарий 33", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег49", "тег50", "тег51"],
            description: "Описание события 17...",
            isFavorite: false
        },
        {
            id: 18,
            title: "Событие 18",
            date: "5 октября 2024, 10.00",
            address: "ул. Сахарова, д. 18",
            organization: "Организация 18",
            feedbacks: [
            { username: "Пользователь 34", comment: "Комментарий 34", avatar: userAvatar },
            { username: "Пользователь 35", comment: "Комментарий 35", avatar: userAvatar }
            ],
            image: eventImage,
            tags: ["тег52", "тег53", "тег54"],
            description: "Описание события 18...",
            isFavorite: true
        }
        ];
        return events;
    }

    static getRecentEvents(){
        const events = [
            {
                id: 1,
                title: "Событие 1",
                address: "ул. Пушкина, д. 1",
                organization: "Организация 1",
                feedbacks: [
                { username: "Пользователь 1", comment: "Комментарий 1", avatar: userAvatar },
                { username: "Пользователь 2", comment: "Комментарий 2", avatar: userAvatar }
                ],
                image: eventImage,
                tags: ["тег1", "тег2", "тег3"],
                description: "Описание события 1...",
                isFavorite: false
            },
            {
                id: 2,
                title: "Событие 2",
                address: "ул. Ленина, д. 2",
                organization: "Организация 2",
                feedbacks: [
                { username: "Пользователь 1", comment: "Комментарий 1", avatar: userAvatar },
                { username: "Пользователь 3", comment: "Комментарий 3", avatar: userAvatar }
                ],
                image: eventImage,
                tags: ["тег4", "тег5", "тег6"],
                description: "Описание события 2...",
                isFavorite: true
            },
            {
                id: 3,
                title: "Событие 3",
                address: "ул. Пушкина, д. 3",
                organization: "Организация 3",
                feedbacks: [
                { username: "Пользователь 4", comment: "Комментарий 4", avatar: userAvatar },
                { username: "Пользователь 5", comment: "Комментарий 5", avatar: userAvatar }
                ],
                image: eventImage,
                tags: ["тег7", "тег8", "тег9"],
                description: "Описание события 3...",
                isFavorite: false
            },
            {
                id: 4,
                title: "Событие 4",
                address: "ул. Лермонтова, д. 4",
                organization: "Организация 4",
                feedbacks: [
                { username: "Пользователь 6", comment: "Комментарий 6", avatar: userAvatar },
                { username: "Пользователь 7", comment: "Комментарий 7", avatar: userAvatar }
                ],
                image: eventImage,
                tags: ["тег10", "тег11", "тег12"],
                description: "Описание события 4...",
                isFavorite: true
            },
            {
                id: 5,
                title: "Событие 5",
                address: "ул. Толстого, д. 5",
                organization: "Организация 5",
                feedbacks: [
                { username: "Пользователь 8", comment: "Комментарий 8", avatar: userAvatar },
                { username: "Пользователь 9", comment: "Комментарий 9", avatar: userAvatar }
                ],
                image: eventImage,
                tags: ["тег13", "тег14", "тег15"],
                description: "Описание события 5...",
                isFavorite: false
            },
            {
                id: 6,
                title: "Событие 6",
                address: "ул. Чехова, д. 6",
                organization: "Организация 6",
                feedbacks: [
                { username: "Пользователь 10", comment: "Комментарий 10", avatar: userAvatar },
                { username: "Пользователь 11", comment: "Комментарий 11", avatar: userAvatar }
                ],
                image: eventImage,
                tags: ["тег16", "тег17", "тег18"],
                description: "Описание события 6...",
                isFavorite: true
            },
        ]

        return events;
    }

    static getTopics(){
        const data = [
            "Тренинги и семинары", 
            "Природоохранные акции", 
            "Эко-исследования",
            "Волонтёрство",
            "Эко-туризм",
            "Выставки и музеи",
            "Эко-фестивали",
            "Эко-движения",
            "Научные конференции",
            "Форумы и конкурсы",
            "Эко-магазины и кафе",
            "Мастер-классы и воркшопы"
        ];   
        return data
    }

}