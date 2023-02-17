$(document).ready(function() {
    // Load CSV file
    $.get("data.csv", function(data) {
      // Parse CSV data
      const rows = data.split("\n");
      const headers = rows[0].split(",");
      const cards = [];
  
      for (let i = 1; i < rows.length; i++) {
        const cols = rows[i].split(",");
        if (cols.length !== headers.length) {
          continue;
        }
  
        const card = {};
        for (let j = 0; j < headers.length; j++) {
          card[headers[j]] = cols[j];
        }
        cards.push(card);
      }
  
      // Render cards
      const cardsContainer = $("#cards-container");
      for (const card of cards) {
        const cardHtml = `
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">
                  <a href="${card.url}" target="_blank">${card.title}</a>
                </h5>
              </div>
            </div>
          </div>
        `;
        cardsContainer.append(cardHtml);
      }
    });
  });
  