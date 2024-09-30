document.title = `Olá! Sou ${Config.User.Name}`
$("#hero #title").text(Config.Hero.Title);
$("#hero #description").text(Config.Hero.Description);
$("#hero button").on("click", () => window.open(Config.Url.Discord));
