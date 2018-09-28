import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

class RedirectComponent extends React.Component {
  componentDidMount() {
    Scrivito.load(() => {
      const link = this.props.page.get("link");
      const openInUi = this.props.page.get("openInUi");
      const url = link && Scrivito.urlFor(link);
      const target = link && link.target();

      return { link, openInUi, url, target };
    }).then(({ link, openInUi, url, target }) => {
      if (!link) {
        return;
      }

      if (link.isInternal() && openInUi === "yes") {
        const scrivitoUiUrl = url.replace(/(\/\/[^/]+)/, "$1/scrivito");
        window.top.location.replace(scrivitoUiUrl);
      } else if (target) {
        window.open(url, target);
        window.history.back();
      } else {
        window.location.replace(url);
      }
    });
  }

  render() {
    const link = this.props.page.get("link");

    if (!link) {
      return (
        <InPlaceEditingPlaceholder center>
          Select a link in the redirect page properties.
        </InPlaceEditingPlaceholder>
      );
    }

    return null;
  }
}

Scrivito.provideComponent("Redirect", RedirectComponent);
