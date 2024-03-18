import { Component } from "@angular/core";

@Component({
	selector: "app-home",
	standalone: true,
	template: `

		<div>
			<a href="https://analogjs.org/" target="_blank">
				<img alt="Analog Logo" class="logo analog" src="/analog.svg" />
			</a>
		</div>

		<h2>Analog</h2>

		<h3>The fullstack meta-framework for Angular!</h3>

		<div class="card">
			<button type="button" (click)="increment()">Count {{ count }}</button>
		</div>

    <p class="read-the-docs">
			For guides on how to customize this project, visit the
			<a href="https://analogjs.org" target="_blank">Analog documentation</a>
		</p>

    <h3 class="text-2xl font-bold underline">Hello also from Tailwind CSS!</h3>

	`,
	styles: [
		`
			.logo {
				will-change: filter;
        width: 15rem;
        margin: 0 auto;
			}
			.logo:hover {
				filter: drop-shadow(0 0 1rem #646cffaa);
			}

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
			.read-the-docs {
				color: #888;
			}
      h3 {
        margin: 1rem 0;
      }

		`,
	],
})
export default class HomeComponent {
	count = 0;

	increment() {
		this.count++;
	}
}
