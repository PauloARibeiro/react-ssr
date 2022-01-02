import React from "../../_snowpack/pkg/react.js";
import ReactSlider from "../../_snowpack/pkg/react-slider.js";
class start extends React.Component {
  constructor(props) {
    super(props);
  }
  async getInitalProps() {
    return { content: await this.fetchContent() };
  }
  async fetchContent() {
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/SingleContent?sectionIds[0]=34a88087-78ca-4399-a692-49dcfcdf79e2&lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/SingleContent?sectionIds[0]=858dd480-1e0c-44a2-bec4-31a38719c521&lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/MultipleContent?sectionIds[0]=cc235920-dcba-4d29-990b-fbf9e6cef0de&lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/SingleContent?sectionIds[0]=fbd1d320-cf28-40fd-b4e5-eeb44cd8b41e&lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/SingleContent?sectionIds[0]=6568b918-ee8f-477f-8e6f-cfc45a0710a2&lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/Content?lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/SingleContent?sectionIds[0]=64c78169-f780-448a-b96e-df26a2f0569c&lang=pt-PT");
    await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/MultipleContent?sectionIds[0]=f0e7ba46-a3a6-476e-80dc-7e4be507c684&lang=pt-PT");
    const res = await fetch("https://api.wigge.pt/api/thebox/public/ContentManager/SingleContent?sectionIds[0]=34a88087-78ca-4399-a692-49dcfcdf79e2&lang=pt-PT");
    const json = await res.json();
    return json;
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return /* @__PURE__ */ React.createElement(ReactSlider, {
      className: "horizontal-slider",
      thumbClassName: "example-thumb",
      trackClassName: "example-track",
      renderThumb: (props, state) => /* @__PURE__ */ React.createElement("div", {
        ...props
      }, state.valueNow)
    });
  }
}
export default start;
