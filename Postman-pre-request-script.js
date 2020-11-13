m.sendRequest({
    url:    "[URL-AUTHENTICATION]",
    method: "POST",
    header: "Content-Type:application/x-www-form-urlencoded",
    body: {
        mode: "urlencoded",
        urlencoded: [
            { key: "client_id",     value: "[ID]" },
            { key: "client_secret", value: "[SECRET]" }
        ]
    }
}, function(err, res) {
	var responseJson = res.json();
	pm.environment.set("token", responseJson.access_token);
});