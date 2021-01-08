import "./style.css"


class Hero extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.render();
    }

    render()
    {
        this.innerHTML = `

        <section class="hero">

            <h1 class="hero-title">
                Hunger App
            </h1>

            <p class="hero-subtitle">
                Temukan makanan dan restauran unik di sekitarmu
            </p>

        </section>
        `
    }
}

customElements.define("hero-app", Hero);