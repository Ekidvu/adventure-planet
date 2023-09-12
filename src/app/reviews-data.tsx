

export const reviewsData = [
    {
        name: "Светлана",
        text: "Работали с вашей компанией на новогоднем детском празднике. Сын в восторге, все друзья были вовлечены в ваше тесла-шоу. Мы, родители, были заинтересованы не меньше детей. Очень все интересно, продуманная программа, замечательный и талантливый аниматор. Желаем вашей компании процветания и дальнейшего развития!", 
        avatar: ""
    },
    {
        name: "мама Марина",
        text: "Спасибо большое Александру за прекрасный день рождения моей дочки. Было весело, оригинально! Больше всего понравились фокусы и мыльные пузыри. Теперь мы ваши постоянные клиенты.", 
        avatar: ""
    },
    {
        name: "Драгомир",
        text: "Как говорят, первые 40 лет в жизни мальчика – самые сложные. Под звуки Тесла-машин и бодрящего мозг напитка, я успевал только отмахиваться от молний и шаров. Такого дня рождения у моего 37-летнего сына еще не было!", 
        avatar: "https://m.media-amazon.com/images/I/61XQYHNhDIL._AC_UL960_QL65_.jpg"
    },
]


interface galleryDataProps {
    link1: string,
    link2?: any;
}

export const galleryData: galleryDataProps[] = [ {
        link1: 'https://thumbs.dreamstime.com/b/mad-professor-thinks-result-experiment-his-laboratory-40737410.jpg',
    }, {
        link1: "https://kartinki.pibig.info/uploads/posts/2023-04/1680376296_kartinki-pibig-info-p-prikolnie-kartinki-laboratoriya-arti-82.jpg",
        link2: "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_cientista_maluco.jpg" ,
    }, {
        link1: 'https://i.pinimg.com/736x/b3/0c/01/b30c011204db512963fdf3f213e6542a.jpg',
    }, {
        link1: 'http://cdt5.ru/images/WxBQ5mbKt-8_1.jpg',
    }, {
        link1: 'https://thumbs.dreamstime.com/b/партия-фейерверков-61199658.jpg',
    }, {
        link1: "https://9355.ru/wp-content/uploads/2023/06/06.jpg",
        link2: "https://avatars.dzeninfra.ru/get-zen_doc/4488125/pub_6090fc65b8e935293cfcd14d_6090ff0f4461ec746c749cf8/scale_1200",
    }, {
        link1: 'https://i.ebayimg.com/images/g/auEAAOSwTbphYL4D/s-l400.jpg',
    }, {
        link1: 'https://i.pinimg.com/474x/2c/96/96/2c96961f6bc6ff7de211b6cfc224a497--science-illustration-vintage-illustration.jpg'
    },
]

// export const galleryData: (string|object)[] = ['https://thumbs.dreamstime.com/b/mad-professor-thinks-result-experiment-his-laboratory-40737410.jpg', 
// ["https://kartinki.pibig.info/uploads/posts/2023-04/1680376296_kartinki-pibig-info-p-prikolnie-kartinki-laboratoriya-arti-82.jpg", "https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_cientista_maluco.jpg"], 
// 'https://i.pinimg.com/736x/b3/0c/01/b30c011204db512963fdf3f213e6542a.jpg',
// 'http://cdt5.ru/images/WxBQ5mbKt-8_1.jpg',
// 'https://thumbs.dreamstime.com/b/партия-фейерверков-61199658.jpg',
// ["https://9355.ru/wp-content/uploads/2023/06/06.jpg", "https://avatars.dzeninfra.ru/get-zen_doc/4488125/pub_6090fc65b8e935293cfcd14d_6090ff0f4461ec746c749cf8/scale_1200"],
// 'https://i.ebayimg.com/images/g/auEAAOSwTbphYL4D/s-l400.jpg',
// 'https://i.pinimg.com/474x/2c/96/96/2c96961f6bc6ff7de211b6cfc224a497--science-illustration-vintage-illustration.jpg']

// export const galleryData: galleryDataProps|string[] [
//     'https://thumbs.dreamstime.com/b/mad-professor-thinks-result-experiment-his-laboratory-40737410.jpg',
//     {}
// ]
// export const galleryData: (string|React.ReactNode)[]

