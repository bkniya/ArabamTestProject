new Vue({
    el: '#fullSiteWrapper',
    data() {
        return {
            items: [],
            promoteds:[]
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
            axios.get("http://arabam.getsandbox.com/news").then(response => {
                console.log(response)
                this.promoteds = response.data.filter((item) => {
                    return item.isFeatured
                })
                this.items = response.data.filter((item) => {
                    return !item.isFeatured
                })
            })
        }
    }
})


