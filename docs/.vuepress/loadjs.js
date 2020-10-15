export default {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        loadJs(url, callback) {
          if (document.querySelector(`#${url}`)) {
            return;
          }

          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.id = url;
          if (typeof callback != 'undefined') {
            if (script.readyState) {
              script.onreadystatechange = function () {
                if (
                  script.readyState == 'loaded' ||
                  script.readyState == 'complete'
                ) {
                  script.onreadystatechange = null;
                  callback();
                }
              };
            } else {
              script.onload = function () {
                callback();
              };
            }
          }
          script.src = url;
          document.body.appendChild(script);
        },
      },
    });
  },
};
