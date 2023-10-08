/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Eymi Kulp',
    photo: 'images/eakulp.jpg',
    favoriteFoods: [
        'Lomo Saltado',
        'Tri Tip',
        'Shushi',
        'Pumpkin pie',
        'Moosetracks Ice Cream'
    ],
    hobbies: [
        'Running',
        'Traveling',
        'Reading',
        'Hiking'
],
    placesLived: [],

}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push (
    {
        place: 'Arequipa, Peru',
        length: '19 years',
    },
    {
        place: 'Los Angeles, CA',
        length: '14 years',
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
let imgElement = document.getElementById("photo");
imgElement.src = myProfile.photo;
imgElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
    
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
    
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {    
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});


