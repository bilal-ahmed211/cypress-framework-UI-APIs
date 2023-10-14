// Custom command for Accessibility Testing
Cypress.Commands.add('customCheckAlly', () => {
    const severityIndicatorIcons = {
        minor: "⚪",
        moderate: "🌕",
        serious: "⭕",
        critical: "⛔",
    };

    function callback(violations) {
        violations.forEach((violation) => {
            const nodes = Cypress.$(
                violation.nodes.map((node) => node.target).join(",")
            );

            Cypress.log({
                name: `${severityIndicatorIcons[violation.impact]} AllY`,
                consoleProps: () => violation,
                $el: nodes,
                message: `[${violation.help}](${violation.helpUrl})`,
            });

            violation.nodes.forEach(({ target }) => {
                Cypress.log({
                    name: "ℹ▶",
                    consoleProps: () => violation,
                    $el: Cypress.$(target.join(",")),
                    message: target,
                });
            });
        });
    }

    cy.checkA11y(null, null, callback);
});

Cypress.Commands.add("getAPI", (url, headers)=>{

    cy.request({
        method: "GET",
        url: url,
        headers: headers
    });
});

Cypress.Commands.add("postAPI", (url, headers, payload)=>{

    cy.request({
        method: "POST",
        url: url,
        headers: headers,
        body: payload
    });
});

Cypress.Commands.add("putAPI", (url, headers, payload)=>{

    cy.request({
        method: "PUT",
        url: url,
        headers: headers
    });
});

Cypress.Commands.add("putAPI", (url, headers, payload)=>{

    cy.request({
        method: "DELET",
        url: url,
        headers: headers
    });
});
