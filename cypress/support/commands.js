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

