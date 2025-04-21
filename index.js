

// var arr = [
//     {
//         username:'Doraemon',
//         image:'https://imgs.search.brave.com/ycs9PokV0IePTkCkxl8DzHufyaP2CRpEI3ah9X-7Kbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmltZS1zdHls/ZS1kb3JhZW1vbl8x/MjQ4MzYwLTU1NC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw',
//         age:45,
//         bff: Nobita Nobi,

//     },
//     {
//         username:'Shinchan',
//         image:'https://imgs.search.brave.com/1qpX_n4Knwv9GRy2rZK58ZJbjERAFiEhX1X4tyR9fAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2F3LXRoaXMtc2hp/bmNoYW4td2FsbHBh/cGVyLXYwLTNvMWhn/ZmdldzNyZDEuanBl/Zz9hdXRvPXdlYnAm/cz0wM2ZjNTIzYTI2/ZTcyZjU5ZjJlNWUy/MzNjNDMwZDA0YWU0/MDA1MzE0',
//         age:50,
//         bff: Kazama,
        
//     },
//     {
//         username:'Ninja Hathori',
//         image:'https://imgs.search.brave.com/_w9IpCRRSzGbjz4ci01CDYOmXOcC_I6uUOJIPcptkms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHUXhabUU1/WldVdE5UVTBNeTAw/TW1ReExUazVNell0/WmpNNFl6ZzJNV000/WlRJelhrRXlYa0Zx/Y0djQC5qcGc',
//         age:34,
//        bff:Kainichi
//     },
//     {
//         username:'Oggy',
//         image:'https://imgs.search.brave.com/Ph6-PYyVlxgZUHb1YTj_w5XFgBAw-JO-aJBOmAG2ClQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HSmhORGd4/TVRVdFpXUXpNUzAw/WVRsakxUa3dZelV0/WWpBM056QTJaV0l4/T0RJMlhrRXlYa0Zx/Y0djQC5qcGc',
//         age:69,
//         bff:cocroaches
//     },
//     {
//     username:'Tom',
//     image:'https://imgs.search.brave.com/R3GwPbXs_Lrc2dzHN771gMNcXIRAspZV3auEotbeJxs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4Lzg0/LzQzLzI4ODQ0M2Fk/ZGY4OGQzYTUyYmZl/YjVjODBkZjg3MWE5/LmpwZw',
//     age:79,
//     bff:Jerry,
//     }

// ]

// var sum = ''

// arr.forEach(function(elem){
//     sum = sum + `<div class="card">
//     <img src="${elem.image}" alt="">
//     <h1>${elem.username}, ${elem.age}</h1>
//     <h2>${elem.realName}</h2>
//     <h5>${elem.superpower}</h5>
// </div>`
// })


// var main = document.querySelector("#main")

// main.innerHTML = sum
var arr = [
    {
        username:'Doraemon',
        image:'https://imgs.search.brave.com/ycs9PokV0IePTkCkxl8DzHufyaP2CRpEI3ah9X-7Kbg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmltZS1zdHls/ZS1kb3JhZW1vbl8x/MjQ4MzYwLTU1NC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw',
        age:24,
        superpower:'Helper',
       bff:'Nobita Nobi',

    },
    {
        username:'Shinchan',
        image:'https://imgs.search.brave.com/1qpX_n4Knwv9GRy2rZK58ZJbjERAFiEhX1X4tyR9fAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c2F3LXRoaXMtc2hp/bmNoYW4td2FsbHBh/cGVyLXYwLTNvMWhn/ZmdldzNyZDEuanBl/Zz9hdXRvPXdlYnAm/cz0wM2ZjNTIzYTI2/ZTcyZjU5ZjJlNWUy/MzNjNDMwZDA0YWU0/MDA1MzE0',
        age:44,
        superpower:'comedian',
        bff:'Kazama'
    },
    {
        username:'Ninja Hathori',
        image:'https://imgs.search.brave.com/_w9IpCRRSzGbjz4ci01CDYOmXOcC_I6uUOJIPcptkms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpHUXhabUU1/WldVdE5UVTBNeTAw/TW1ReExUazVNell0/WmpNNFl6ZzJNV000/WlRJelhrRXlYa0Zx/Y0djQC5qcGc',
        age:34,
        superpower:'Dostana',
        bff:'Kainichi'
    },
    {
        username:'Oggy',
        image:'https://imgs.search.brave.com/Ph6-PYyVlxgZUHb1YTj_w5XFgBAw-JO-aJBOmAG2ClQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5HSmhORGd4/TVRVdFpXUXpNUzAw/WVRsakxUa3dZelV0/WWpBM056QTJaV0l4/T0RJMlhrRXlYa0Zx/Y0djQC5qcGc',
        age:69,
        superpower:'jhagarna',
       bff:'cocroaches,'
    },
]

var sum = ''

arr.forEach(function(elem){
    sum = sum + `<div class="card">
    <img src="${elem.image}" alt="">
    <h1>${elem.username}, ${elem.age}</h1>
    <h2>${elem.realName}</h2>
    <h5>${elem.superpower}</h5>
</div>`
})


var main = document.querySelector("#main")

main.innerHTML = sum