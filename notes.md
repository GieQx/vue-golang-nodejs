DAY 1

install live server, vuetor and vue format

use v-if, if there are sensitive data
code:   
    <div v-if="condition">
        <p>data</p>
    </div>
use v-else to show the opposite of v-if

use v-show to hide elements
code: 
    <div v-show="condition">
        <p>data</p>
    </div>

v-for use to render a list of items
v-for="item in items"
code: 
    <ul>
        <li v-for="item in items">{{item}}</li>
    </ul>