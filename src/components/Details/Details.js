import React from 'react';
import fetch from '../../api/fetch'
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react'


class Details extends React.Component {
    state = { data: {} }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        fetch.get().then(res => {
            console.log(res.data[this.props.match.params.id])
            this.setState({ data: res.data[this.props.match.params.id] })
        }).catch(err => {
            console.log(err)
        });
    }
    renderDetail = () => {
        return (<div class="ui items" >
            <div class="item">
                <div class="ui small image">
                    <img className="ui fluid image" src={this.state.data.image} alt={this.state.data.name} />
                </div>
                <div class="content">
                    <div class="header">
                        {this.state.data.name}
                    </div>
                    <div>
                        <Rating icon='star' defaultRating={2} maxRating={4} />
                    </div>
                    <div class="description">
                        <p>{this.state.data.description}</p>
                    </div>
                    <div class="extra">
                            <div class="ui right floated">
                                <span>Mark as Fav  </span>
                            <Rating icon='heart' size='huge'/>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        )
    }
    render() {
        if (this.state.data === {}) {
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return (
            <div>
                <Link to={`/`}>
                    <button class="ui labeled icon button">
                        <i class="left arrow icon"></i>
                        Go Back
                </button>
                    <div class="ui divider"></div>
                </Link>
                {this.renderDetail()}
            </div>
        )
    }
}

export default Details;