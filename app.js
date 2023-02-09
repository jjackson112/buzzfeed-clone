const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answers')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1652058812736-ce11c92284e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
                alt: "Photo of the Empire State Building during the daytime",
                credit: "Bailey Alexander"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1561047725-c5808d089cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
                alt: "ATX Sign in Austin",
                credit: "Tomek Baginski"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1436505743955-a98c0d3eb1a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGxhbmQlMjBzYXR1cmF5JTIwbWFya2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
                alt: "Portland White Stag Sign",
                credit: "Zack Spear"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1640583442212-51283693be7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80",
                alt: "New Orleans historic building",
                credit: "Stella He"
            }
        ]
    },
    {
        id: 1,
        text: "Pick your favorite food",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Cheese pizza",
                credit:"Ivan Torres"
            },
            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1559466273-d95e72debaf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
                alt: "Homemade sandwich with sweet chilli turkey and salad.",
                credit:"Monika Grabkowska"
            },
            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Seafood pasta with shrimps and tomatoes in a pan",
                credit:"Olayinka Babalola"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1600688640154-9619e002df30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
                alt: "White Truffle Double Cheeseburger",
                credit:"Emanuel Ekström"
            },
        ]
    },
    {
        id: 2,
        text: "Pick a home",
        answers: [
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1628624747278-224ee8fa1f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "House in the suburbs",
                credit: "Zac Gudakov"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
                alt: "Contemporary Living",
                credit: "Avi Werde"
            },
            {
                text: "Alternative",
                image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                alt: "Van Life",
                credit: "Caleb George"
            },
            {
                text: "Nature",
                image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                alt: "Home on a lake in the mountains",
                credit: "Ian Keefe"
            }
        ]
    }
] 