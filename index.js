export default class Countdown {

    constructor(querySelector) {
        this.querySelector   = querySelector || '[data-dscountdown]';
        this.datasetProperty = this.querySelector.replace(/[^a-zA-Z-]/g, '').split('-').reverse()[0];
        this.refs            = this._getRefs();
        this._clearOldCountDowns();
        this._doCountdown();
    }

    _clearOldCountDowns() {
        if (window.dscountdowns) {
            window.dscountdowns.map(c => clearInterval(c));
        }
        window.dscountdowns = [];
    }

    /**
     * @return {*[]}
     * @private
     */
    _getRefs() {
        return [...document.querySelectorAll(this.querySelector)];
    }

    _getLabel(labels, labelName, labelClasses) {
        return labels[labelName] ? `<span class="${labelClasses}">${labels[labelName]}</span>` : '';
    }

    _getRow(value, valuesClasses, labels, labelName, labelClasses) {
        return `<span class="${valuesClasses}">${value}</span> ${this._getLabel(labels, labelName, labelClasses)}`.trim();
    }

    /**
     * @private
     */
    _doCountdown() {
        for (let i = 0; i < this.refs.length; i++) {
            const ref              = this.refs[i];
            const classes          = (ref.dataset.countdownclasses || '').trim();
            const labelClasses     = (ref.dataset.labelclasses || '').trim();
            const separatorClasses = (ref.dataset.separatorclasses || '').trim();
            const valuesClasses    = (ref.dataset.valuesclasses || '').trim();
            const prefix           = ref.dataset.prefix || '';
            const suffix           = ref.dataset.suffix || '';
            const labels           = ref.dataset.labels ? JSON.parse(ref.dataset.labels) : {
                "days":    null,
                "hours":   null,
                "minutes": null,
                "seconds": null
            };
            const separator        = `<span class="${separatorClasses}">${(ref.dataset.separator || ' : ')}</span>`;
            const endDate          = new Date(ref.dataset[this.datasetProperty]).getTime();

            window.dscountdowns.push(setInterval(() => {
                const now       = new Date().getTime();
                const timeleft  = endDate - now;
                const rows      = [
                    {name: 'days', value: Math.floor(timeleft / (1000 * 60 * 60 * 24))},
                    {
                        name:  'hours',
                        value: (Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + '').padStart(2, '0')
                    },
                    {
                        name:  'minutes',
                        value: (Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)) + '').padStart(2, '0')
                    },
                    {name: 'seconds', value: (Math.floor((timeleft % (1000 * 60)) / 1000) + '').padStart(2, '0')}
                ];
                const countdown = rows.map(item => this._getRow(item.value, valuesClasses, labels, item.name, labelClasses)).join(separator);

                ref.innerHTML = prefix + `<span class="${classes}">${countdown}</span>` + suffix;
            }, 1000));
        }
    }
}
