new Vue({
    el: '#fullSiteWrapper',
    data() {
        return {
            item: {},
        }

    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData()
    },
    methods:
    {
        fetchData() {
            let newsId=  getParameterByName('newsId')
            axios.get("http://arabam.getsandbox.com/news/" + newsId).then(response => {
                console.log(response)
                this.item = response.data
            })
        }
    }
})

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}