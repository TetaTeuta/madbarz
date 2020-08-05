(function() {
  "use strict";

  class Feed extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        feed: []
      };
    }

    componentDidMount() {
      const token =
        "AgezoJcPNKeuaIu62UA2w1XhmIDl5QRIXguiyHBlyGJGms6kOow-W0SPIMTnoIoAm6KdEdFnUGYSItSbJlFN5C487oN3Rsw55CCayWcIJGOzGyjuHxsv3eiPHfdlyO6s6UPlC8XjlpTWYybyEmezvMInsCTr_sftdY6XFu-ui5pUw-A5D9pLNT9c2TE9j5UE1KRPAhMhA7BhmmZaZb3Y9BKq0h_tJO27EFhhODNDyQ-lDxrE3YjcMFLb7728bo7mAC_LPlEt_n_88LTjASAw2wjP982LIX_6JCPIzHe0XZUq-Y6GsMTEQ7br6gRKWCsa-iZN_vjSzJdQbekuV52MnydHj-P5dhp8OVxApQTobX663r-3";
      axios
        .get(
          `https://api.madbarz.com/api/jobs/GetFeed?skip=0&skipFeatured=5&take=10`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        .then((response) => {
          this.setState({
            feed: response.data
          });
          console.log("response from API ^^");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    render() {
      const { feed } = this.state;
      console.log(feed);

      if (!feed) return <p>List is blank</p>;

      return (
        <div className="feed__rendered">
          {/* {this.state.feed.map((feed) => (
            <div className="card__container" key={feed._id}>
            </div>
          ))} */}
        </div>
      );
    }
  }

  ReactDOM.render(<Feed />, document.getElementById("reactRoot"));
})();
