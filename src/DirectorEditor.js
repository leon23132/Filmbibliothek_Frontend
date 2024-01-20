import React, { useState } from "react";

export function DirectorEditor({ director, saveCallback, cancelCallback }) {

    const [formData, setFormData] = useState({
        firstname: director.firstname,
        lastname: director.lastname
    });

    const handleSave = (ev) => {
        const newDirector = {
            ...director,
            firstname: formData.firstname,
            lastname: formData.lastname
        };
        saveCallback(newDirector);
    };

    const selectorChanged = (ev) => {
        const newFormData = { ...formData };
        const { name, value } = ev.target;
        switch (name) {
            default:
                newFormData[name] = value;
                break;
        }
        setFormData(newFormData);
    };

    return (
        <div className="m-2">
            <div className="form-group">
                <label>Vorname</label>
                <h6 className="text-danger" key="firstname_err"
                    hidden={formData.firstname.length !== 0}>
                    Der Vorname des Regisseurs darf nicht leer sein
                </h6>
                <input className="form-control" name="firstname"
                    value={formData.firstname}
                    onChange={selectorChanged}
                />
            </div>
            <div className="form-group">
                <label>Name</label>
                <h6 className="text-danger" key="lastname_err"
                    hidden={formData.lastname.length !== 0}>
                    Der Name des Regisseurs darf nicht leer sein
                </h6>
                <input className="form-control" name="lastname"
                    value={formData.lastname}
                    onChange={selectorChanged}
                />
            </div>

            <div className="text-center">
                <button className="btn btn-primary m-1" onClick={handleSave}
                    disabled={formData.firstname.length === 0 || formData.lastname.length === 0}
                >
                    Save
                </button>
                <button className="btn btn-secondary"
                    onClick={() => cancelCallback()}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
