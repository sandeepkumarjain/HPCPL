document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");

  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      header.classList.toggle("nav-open");
    });
  }

  var quoteForm = document.querySelector("[data-quote-form]");
  if (!quoteForm) {
    return;
  }

  var status = quoteForm.querySelector("[data-form-status]");
  var whatsappLink = quoteForm.querySelector("[data-whatsapp-submit]");

  function updateWhatsAppLink() {
    var formData = new FormData(quoteForm);
    var name = (formData.get("name") || "").toString().trim();
    var company = (formData.get("company") || "").toString().trim();
    var phone = (formData.get("phone") || "").toString().trim();
    var email = (formData.get("email") || "").toString().trim();
    var requirement = (formData.get("requirement") || "").toString().trim();
    var quantity = (formData.get("quantity") || "").toString().trim();
    var details = (formData.get("details") || "").toString().trim();

    var lines = [
      "Hello HANNANTH PETRO CHEM PRIVATE LIMITED,",
      "",
      "I would like to request a quote.",
      "Name: " + (name || "-"),
      "Company: " + (company || "-"),
      "Phone: " + (phone || "-"),
      "Email: " + (email || "-"),
      "Requirement: " + (requirement || "-"),
      "Quantity: " + (quantity || "-"),
      "Details: " + (details || "-")
    ];

    var message = encodeURIComponent(lines.join("\n"));
    if (whatsappLink) {
      whatsappLink.href = "https://wa.me/917877228427?text=" + message;
    }
  }

  quoteForm.addEventListener("input", updateWhatsAppLink);
  quoteForm.addEventListener("change", updateWhatsAppLink);

  quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    updateWhatsAppLink();

    if (status) {
      status.textContent = "Quote details are ready. Use WhatsApp Inquiry to send them instantly.";
    }
  });

  updateWhatsAppLink();
});
