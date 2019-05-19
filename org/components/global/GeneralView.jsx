import React, { Component } from 'react'
import GlobalList from './GlobalList.jsx'
import GlobalGrid from './GlobalGrid.jsx'
import Navigation from '../etc/Navigation.jsx'
import Footer from '../etc/Footer.jsx'
export default class GeneralView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listView: false,
            gridView: true,
            currentAds: this.props.adverts,
            keyword: '',
            fields: {
                "minPrice": "",
                "maxPrice": "5000",
                "minArea": "",
                "maxArea": "1000",
                "minBedrooms": "",
                "maxBedrooms": "7",
                "minFloors": "",
                "maxFloors": "5"
            }
        }
        this.clearKey = this.clearKey.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
        this.submitFilter = this.submitFilter.bind(this)
    }

    componentWillMount() {
        this.props.fetchAllAds()
        this.props.fetchAllProjects()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentAds: nextProps.adverts })
        if (nextProps.filteredEstates.length !== 0){
            this.setState({currentAds: nextProps.filteredEstates})
        }
    }

    clearKey() {
        this.setState({
            currentAds: this.props.adverts,
            keyword: ''
        })
    }

    clearFilter() {
        let fields = this.state.fields
        fields["minArea"] = "";
        fields["minPrice"] = "";
        fields["minBedrooms"] = "";
        fields["minFloors"] = "";
        this.setState({fields:fields})

    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields })
    }


    filterByPrice(filter) {
        if (filter === 'LO_TO_HI') {
            let lowToHigh = this.props.adverts.sort(function (a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });
            this.setState({ currentAds: lowToHigh })
        }
        else if (filter === 'HI_TO_LO') {
            let highToLow = this.props.adverts.sort(function (a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
            });
            this.setState({ currentAds: highToLow })

        }
    }

    filterByDemand(filter) {
        if (filter === 'BELOW_500') {
            let below500 = this.props.adverts.filter((ad) => ad.area <= 500)
            this.setState({ currentAds: below500 })
        }

        else if (filter === 'OVER_500') {
            let over500 = this.props.adverts.filter((ad) => ad.area > 500)
            this.setState({ currentAds: over500 })
        }

        else if (filter === 'BEDROOMS_1_3') {
            let bedrooms_1_3 = this.props.adverts.filter((ad) => ad.bedrooms >= 1 && ad.bedrooms <= 3)
            this.setState({ currentAds: bedrooms_1_3 })
        }

        else if (filter === 'BEDROOMS_3_') {
            let bedrooms_3_ = this.props.adverts.filter((ad) => ad.bedrooms > 3)
            this.setState({ currentAds: bedrooms_3_ })
        }

        else if (filter === 'FLOORS_1_3') {
            let floors_1_3 = this.props.adverts.filter((ad) => ad.floors >= 1 && ad.floors <= 3)
            this.setState({ currentAds: floors_1_3 })
        }

        else if (filter === 'FLOORS_3_') {
            let floors_3_ = this.props.adverts.filter((ad) => ad.floors > 3)
            this.setState({ currentAds: floors_3_ })
        }

        else {
            let category = this.props.adverts.filter((ad) => ad.project == filter)
            this.setState({ currentAds: category })
        }


    }

    onFind(e) {
        var target = e.target
        var name = target.name
        var value = target.value

        this.setState({
            [name]: value
        })

        var loweredkeyword = this.state.keyword.toLowerCase()
        if (this.state.keyword === undefined) {
            this.setState({ currentAds: this.props.adverts })
        }
        this.setState({
            currentAds: this.props.adverts.filter(ad =>
                ad.title.toLowerCase().indexOf(loweredkeyword) !== -1
            )
        })
    }

    submitFilter(e){
        e.preventDefault()
        this.props.getFilteredEstates(this.state.fields)
        this.clearFilter()
    }

    onViewList() {
        this.setState({
            listView: true,
            gridView: false
        })
    }

    onViewGrid() {
        this.setState({
            listView: false,
            gridView: true
        })
    }



    render() {
        return (
            <div>
                <Navigation />
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1542756171-71dfa54e897f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80" style={{ height: "100vh", maxWidth: "100vw" }} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1438897355194-72f9a021569e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" style={{ height: "100vh", width: "100vw" }} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.unsplash.com/photo-1498373419901-52eba931dc4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ height: "100vh", width: "100vw" }} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <Footer></Footer>
                            </div>
        )
    }

}