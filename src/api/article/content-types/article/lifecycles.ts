const removeMd = require("remove-markdown");

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    // Check specifically for YOUR field name: TextoMarkdown
    if (data.TextoMarkdown) {
      data.summary = createSummary(data.TextoMarkdown);
    }
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;

    // Case 1: You edited the Markdown field directly
    if (data.TextoMarkdown) {
      console.log("TextoMarkdown changed. Generating summary...");
      data.summary = createSummary(data.TextoMarkdown);
    }
    // Case 2: Partial update (you saved the title/slug but not text)
    else {
      console.log("TextoMarkdown not in payload. Checking DB...");

      // QUERY: Use the correct UID for Article
      const entry = await strapi.db.query("api::article.article").findOne({
        where,
        // SELECT: We must select 'TextoMarkdown' so we can read it
        select: ["TextoMarkdown", "summary"],
      });

      // Check if entry exists AND has text AND summary is missing/empty
      if (entry && entry.TextoMarkdown) {
        // Optional: Remove '!entry.summary' if you want to force overwrite every time
        if (!entry.summary) {
          console.log("Generating missing summary from DB data...");
          data.summary = createSummary(entry.TextoMarkdown);
        }
      }
    }
  },
};

function createSummary(markdownText: string) {
  if (!markdownText) return "";

  try {
    // Convert to string just in case
    const textString = String(markdownText);
    const plainText = removeMd(textString);

    const maxLength = 80;
    let summary = plainText.substring(0, maxLength);

    // Clean up newlines that might make the summary look weird
    summary = summary.replace(/\n/g, " ").trim();

    if (plainText.length > maxLength) {
      summary += "...";
    }
    console.log(summary);
    return summary;
  } catch (error) {
    console.error("Error creating summary:", error);
    return "";
  }
}
