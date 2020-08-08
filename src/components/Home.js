import React from 'react';
import fetch from '../api/fetch'
import { Link } from 'react-router-dom';
import './Home.css';
class App extends React.Component {
    state = { data: [] }

    componentDidMount() {
        this.fetchData()

    }

    fetchData = async () => {
        fetch.get().then(res => {
            console.log(res.data)
            this.setState({ data: res.data })
        }).catch(err => {
            console.log(err)
        });
    }


    renderCards = () => {
        return this.state.data.map(card => {
            return (
                <Link to={{
                    pathname: `/${card.id}`,
                    card: { card }
                }} className="column"
                    key={card.id}>
                    <div className="ui fluid card">
                        <div className="image">
                            <img src={card.image} alt={card.name} />
                        </div>
                        <div className="content">
                            <span className="header">{card.name}</span>
                            <div className="meta">
                                <span>{card.category}</span>
                            </div>
                            <div className="description">
                                {card.description}
                            </div>
                        </div>
                        <div className="extra content">
                            <span className="right floated">
                                {card.label}
                            </span>
                            <span>
                                Price: Rs {card.price}
                            </span>
                        </div>
                    </div>
                </Link>
            );
        });
    }

    renderList = () => {
        return (
            <div className="ui container">
                <div className="ui three column doubling stackable masonry grid">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

    placeHolder = () => {
        return (
            <div className="ui fluid card">
                <div className="image">
                    <div class="ui placeholder">
                        <div class="square image"></div>
                    </div>
                </div>
                <div className="content">
                    <div class="ui placeholder">
                        <div class="header">
                            <div class="very short line"></div>
                            <div class="medium line"></div>
                        </div>
                        <div class="paragraph">
                            <div class="short line"></div>
                        </div>
                    </div>
                </div>
                <div className="extra content">
                    <div class="ui placeholder">
                        <span className="right floated">
                            <div class="very short line"></div>
                        </span>
                        <span>
                            <div class="very short line"></div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        var r = this.placeHolder();
        if (this.state.data !== []) {
            r = this.renderList()
        }
        return (
            <div>
                <h1 className="ui right aligned header">
                    Recipe
                </h1>
                {r}
            </div>
        )

    };
}


export default App;