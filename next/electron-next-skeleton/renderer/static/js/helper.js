function parseJSON(JSON){

  
    <% _.each(items, function(item, key, list) { %>
      <% if (typeof list[key - 1] != 'undefined' && (list[key - 1].score >= 50 && item.score < 50)) { %>
        <hr class="base--hr output-stats-column--hr">
        <% } %>
          <div class="percent-bar-and-score">
            <div class="percent-bar-and-score--label <%= (item.score >= 50) ? 'percent-bar-and-score--label_POSITIVE' : 'percent-bar-and-score--label_NEGATIVE' %>">
              <%= item.name %>
                <div class="tooltip">
                  <%= tooltips(item.id) || 'Ayuda no disponible' %>
                </div>
            </div>
            <div class="percent-bar percent-bar-and-score--percent-bar">
              <div class="percent-bar--meter" style="-webkit-transform: translate(<%= item.score %>%); transform: translate(<%= item.score %>%)">
                <div class="percent-bar--ball <%= (item.score >= 50) ? 'percent-bar--ball_POSITIVE-FILL' : 'percent-bar--ball_NEGATIVE-FILL' %>"></div>
                <div class="percent-bar-and-score--number">
                  <%= item.score %>%</div>
              </div>
            </div>
          </div>
          <% });%>

  }
