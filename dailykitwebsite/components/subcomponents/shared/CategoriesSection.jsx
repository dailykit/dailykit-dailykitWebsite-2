import React, { PureComponent } from "react";
export default class Categoriessection extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-around categories">
          {this.props.list.map((item) => {
            return (
              <div className="col-md-3 col-xs-10">
                <ul className="onDemandCategories">
                  {item.map((li) => {
                    return <li key={Math.round(Math.random() * 1000)}>{li}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
