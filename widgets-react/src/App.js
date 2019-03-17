import React, { Component } from "react";
import { SectionList } from "./SectionList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { widgets: [] };
    }
    componentDidMount() {}
    loadUI(fileName) {
        fetch(fileName)
            .then(res => res.json())
            .then(json => this.setState({ widgets: json.widgets }));
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-success"
                    onClick={this.loadUI.bind(this, "/data1.json")}
                >
                    Load Sample 1
                </button>
                <button
                    className="btn btn-success"
                    onClick={this.loadUI.bind(this, "/data2.json")}
                >
                    Load Sample 2
                </button>
                {this.state.widgets.map(widgetItem => (
                    <form key={widgetItem.name} className="card mb-2">
                        <div className="card-header d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                Cancel
                            </button>
                            <h3 className="text-success">{widgetItem.name}</h3>
                            <button
                                type="button"
                                className="btn btn-outline-success"
                            >
                                Save
                            </button>
                        </div>
                        <SectionList sections={widgetItem.items} />
                    </form>
                ))}
            </div>
        );
    }
}

export default App;
