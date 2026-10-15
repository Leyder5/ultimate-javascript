let serialize = target =>                                            // función transversal: convierte un formulario en objeto
    Array.from(target.elements).reduce((acc, el) => {                // (fuera de la clase porque se puede reutilizar en otras partes)
        if (!el.name) return acc;                                    // ignora el botón (no tiene name)
        acc[el.name] = el.value;                                     // { name: 'Nico', email: 'ejemplo@holamundo.io' }
        return acc;
    }, {});

class User {
    static #url = 'https://jsonplaceholder.typicode.com/users';      // privada y estática: solo la clase la usa, nadie la modifica
    static #users = [];                                              // "estado": guarda los usuarios para no pedirlos a la API cada vez
    static #ul = document.createElement('ul');                       // referencia única al listado (se crea una sola vez)
    static #form = document.createElement('form');                   // referencia única al formulario
    static #initialValues = {                                        // valores iniciales del formulario
        name: '',
        email: '',
    }

    constructor(data) {                                              // una instancia = un usuario
        this.name = data.name;
        this.email = data.email;
    }

    static async getAll() {                                          // trae todos los usuarios de la API
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw response;                        // lanza el response completo (no un Error) para ver más detalle
            this.#users = await response.json();
            return this.#users;
        } catch (e) {
            console.log('Error', e);
        }
    }

    static renderUser(u) {                                           // crea el <li> de UN usuario (se reutiliza al crear usuarios)
        let li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    static render() {                                                // agrega todos los usuarios al <ul> y lo devuelve
        let users = this.#users;
        users.forEach(u => this.#ul.appendChild(this.renderUser(u)));

        return this.#ul;
    }

    static onSubmit(e) {                                             // al enviar el formulario
        e.preventDefault();
        let data = serialize(e.target);
        let user = new User(data);
        const errors = user.validate();
        if (Object.keys(errors).length > 0) {                        // si hay errores, vuelve a renderizar el formulario con ellos
            console.log(this);                                       // gracias al bind(this) en renderForm, this es la clase User
            this.#form.innerHTML = this.formHTML({ data, errors });
            return;
        }
        user.save();                                                 // si no hay errores, guarda el usuario
    }

    save() {                                                         // método de instancia: usa el método estático
        return User.save(this);
    }

    static async save(user) {                                        // envía el usuario a la API con POST
        try {
            const response = await fetch(this.#url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            this.#users.unshift(data);                               // lo agrega al comienzo del estado...
            this.#ul.prepend(this.renderUser(data));                 // ...y al comienzo del listado en pantalla
        } catch(e) {
            console.log('Error', e);
        }
    }

    validate() {                                                     // de instancia: valida a ESTE usuario
        let errors = {};
        if (!this.name) {
            errors.name = "Nombre es obligatorio";
        }
        if (!this.email) {
            errors.email = "Correo es obligatorio";
        }
        return errors;
    }

    static formHTML({ data, errors }) {                              // plantilla del formulario con valores y errores
        return `
            <form>
                <div>
                    <label>Nombre:</label>
                    <input name="name" value="${data.name}" />
                    ${errors.name || ''}
                </div>
                <div>
                    <label>Correo:</label>
                    <input name="email" value="${data.email}" />
                    ${errors.email || ''}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        `
    }

    static renderForm() {
        // onSubmit, initialValues, error, html
        this.#form.onsubmit = this.onSubmit.bind(this);              // bind(this): si no, this en onSubmit sería el <form>
        this.#form.innerHTML = this.formHTML({
            data: this.#initialValues,
            errors: {},
        });

        return this.#form;
    }
}

async function main() {                                              // main: por convención, donde arranca la aplicación
    const users = await User.getAll();
    const template = User.render();
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', template);
    document.body.insertAdjacentElement('afterbegin', form);        // el formulario queda arriba del listado
}

main();
