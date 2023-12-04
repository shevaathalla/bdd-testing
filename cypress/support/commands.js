// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginWithTokenCloud', (type) => {

	let accountEmail, accountPassword;
	if (type == 1) {
		accountEmail = Cypress.env('CLOUD_ACCOUNT_EMAIL');
		accountPassword = Cypress.env('CLOUD_ACCOUNT_PASSWORD');
	}else{
		accountEmail = Cypress.env('CLOUD_ACCOUNT_EMAIL_2');
		accountPassword = Cypress.env('CLOUD_ACCOUNT_PASSWORD_2');
	}

	let fcmToken = '123';

	cy.request({
		method: 'POST',
		url: `https://api-${Cypress.env('CLOUD_APP_ENV')}.sipas.id/v1/identity/identity/login`,
		body: {
			email: accountEmail,
			password: accountPassword,
			alat_token_fcm: fcmToken,
		},
	}).then((response) => {
		//* - =====================================
		expect(response.status).to.equal(200);
		expect(response.body.error).to.be.false;
		expect(response.body.data).to.not.be.empty;
		let accessToken = response.body.data.access_token;
		let refreshToken = response.body.data.refresh_token;
		cy.log(accessToken);
		cy.log(refreshToken);
		cy.wait(2000);
		cy.setCookie('access_token', accessToken);
		cy.setCookie('refresh_token', refreshToken);
        
		cy.fixture('sipas_cloud_permissible').then((data) => {
			window.localStorage.setItem('persist:SipasData', JSON.stringify(data));
		});
	});
});

Cypress.Commands.add('loginWithTokenSeedtrack', () => {
	let accountEmail = Cypress.env('SEEDTRACK_ACCOUNT_EMAIL');

	cy.request({
		method: 'POST',
		url: `${Cypress.env('SEEDTRACK_API_HOST')}/login`,
		body: {
			UserEmail: accountEmail,
			CountryId: 4,
			CropId: 1
		},
	}).then((response) => {
		//* - =====================================
		expect(response.status).to.equal(200);
		expect(response.body.success).to.be.true;
		expect(response.body.data).to.not.be.empty;
		let accessToken = response.body.data.token;
		cy.log(accessToken);
		cy.wait(2000);
		cy.setCookie('access_token', accessToken);
        
		cy.fixture('seedtrack_permissible').then((data) => {
			window.localStorage.setItem('persist:SeedTrack', JSON.stringify(data));
		});
	});
});