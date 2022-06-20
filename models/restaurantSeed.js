const RestaurantSeed = [
{
    name: 'The Italian',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    phone: '123-456-7890',
    email: 'something@something.com',
    image: 'https://d332juqdd9b8hn.cloudfront.net/wp-content/uploads/2019/04/BEAUTIFULPIZZERIA.jpg',
    menu: [
        {
            name: 'Pizza',
            price: '$10',  
            description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often, anchovies or olives.',
            image: 'https://cdn.vox-cdn.com/thumbor/mtM_oXYOiVAVWsznJfX6eLYm45U=/0x0:2000x1335/1200x900/filters:focal(840x508:1160x828):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/64924516/2019_03_25_AnticaPizzeriadeMichele_040.0.jpg',
        },
        {
            name: 'Pasta',
            price: '$12',
            description: 'Pasta is a type of food typically made from an unleavened dough of durum wheat flour, sometimes known as ',
            image: 'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg',
        },
        {
            name: 'Salad',
            price: '$8',
            description: 'Salad is a dish of food typically consisting of vegetables, often mixed with other ingredients such as meat, cheese, eggs, or fish.',
            image: 'https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg',
        }
    ]
},
{
    name: 'McDonalds',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    phone: '123-456-7890',
    email: 'mcdonals@mcd.com',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/mcdonalds-2.jpg?quality=82&strip=1',
    menu: [
        {
            name: 'Chicken McNuggets',
            price: '$10',
            description: 'Chicken McNuggets is a hamburger consisting of a bun, patty, and a bun.',
            image: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chicken-Nuggets_EXPS_SDON18_1500_E06_13_1b.jpg',
        },
        {
            name: 'Big Mac',
            price: '$12',
            description: 'Big Mac is a hamburger consisting of a bun, patty, and a bun.',
            image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/healthy-bigger-better-big-mac.jpg?quality=82&strip=all',
        },
        {
            name: 'Cheeseburger',
            price: '$8',
            description: 'Cheeseburger is a hamburger consisting of a bun, patty, and a bun.',
            image: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off',
        }
    ]
},
{
    name: 'Taco Bell',
    address: '1234 Main St',
    city: 'Los Angeles',
    state: 'CA',
    zip: '93301',
    phone: '123-456-7220',
    email: 'taco@bell.com',
    image: 'https://locations.tacobell.com/permanent-b0b701/assets/images/hero.9266f3de.jpg',
    menu: [
        {
            name: 'Taco',
            price: '$10',
            description: 'Taco is a dish of Mexican origin, consisting of a corn-based dish of ground meat and vegetables cooked in a corn shell.',
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/bd/df/a4/taco.jpg',
        },
        {
            name: 'Burrito',
            price: '$12',
            description: 'Burrito is a dish of Mexican origin, consisting of a corn-based dish of ground meat and vegetables cooked in a corn shell.',
            image: 'https://www.tacobell.com/images/23263_beefy_melt_burrito_crunchy_750x660.jpg',
        },
        {
            name: 'Quesadilla',
            price: '$8',
            description: 'Quesadilla is a dish of Mexican origin, consisting of a corn-based dish of ground meat and vegetables cooked in a corn shell.',
            image: 'https://recipetineats.com/wp-content/uploads/2018/06/Quesadillas_4.jpg',
        }
    ]
},
{
    name: 'Subway',
    address: '1234 Second St',
    city: 'Northridge',
    state: 'CA',
    zip: '91325',
    phone: '123-456-7221',
    email: 'sub@way.com',
    image: 'https://cdn.abcotvs.com/dip/images/4039400_082318-kabc-6am-jefferson-subway-robbery-vid.jpg?w=800&r=16%3A9',
    menu: [
        {
            name: 'Sandwich',
            price: '$10',
            description: 'Sandwich is a dish of food typically consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often, anchovies or olives.',
            image: 'https://www.foodbusinessnews.net/ext/resources/2021/6/SubwaySandwich_Lead.jpg?t=1624931205&width=1080',
        },
        {
            name: 'Pastrami Sandwich',
            price: '$12',
            description: 'Pastrami Sandwich is a hamburger consisting of a bun, patty, and a bun.',
            image: 'https://s.hdnux.com/photos/25/22/40/5580824/3/rawImage.jpg',
        },
        {
            name: 'Hot Dog',
            price: '$8',
            description: 'Hot Dog is a dish of food typically consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often, anchovies or olives.',
            image: 'https://vegnews.com/media/W1siZiIsIjI2MDg2L1ZlZ05ld3MuU3Vid2F5VmVnYW5CYWNvblBpZ3MuanBnIl0sWyJwIiwiY3JvcF9yZXNpemVkIiwiMTc1M3gxMDM2Kzg2KzE2MSIsIjE2MDB4OTQ2XiIseyJmb3JtYXQiOiJqcGcifV0sWyJwIiwib3B0aW1pemUiXV0/VegNews.SubwayVeganBaconPigs.jpg?sha=54244f28b73860c3',
        }


]
}
]

module.exports = RestaurantSeed;