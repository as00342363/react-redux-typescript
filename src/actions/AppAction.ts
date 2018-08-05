// https://www.healthcare.gov/api/articles.json
export function amendUserName(name: string) {
    return {
      payload: name,
      type: "AMEND_USERNAME"
    };
  }