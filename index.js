System.import('./modules/sleep').then(module => {
    module.default()
}, error => console.log(error))

//require('./app.less')

console.log('loaded index.js')

$(document).ready(function() {
    $('input:text').val('jQuery running in Index')
})
