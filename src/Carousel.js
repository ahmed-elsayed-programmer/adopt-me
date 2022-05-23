import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  static defultProps = {
    images: ["http://pets-images.div-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    console.log();
    this.setState({
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              key={index}
              src={image}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}
