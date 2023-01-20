/**
 * @file mofron-comp-spinner/index.js
 * @brief spinner component for mofron
 * @license MIT
 */
const Loading = require('mofron-comp-loading');
const Frame   = require('mofron-comp-frame');
const Spinner = require('mofron-comp-spinner');
const HrzPos  = require('mofron-effect-hrzpos');
const ConfArg = mofron.class.ConfArg;
const cmputl = mofron.util.component;
const comutl = mofron.util.common;

module.exports = class extends Loading {
    /**
     * initialize component
     * 
     * @param (mixed) string: message text
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("SpLoading");
	    
            /* init config */
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            
	    let txt_wrp = new mofron.class.Component(this.text());
            let frame = new Frame({
                size:        new ConfArg("2rem","1.5rem"),
                baseColor:   "white",
                accentColor: "white",
                child: [this.spinner(), txt_wrp]
            });

	    txt_wrp.height(
                comutl.sizediff(frame.height(), this.spinner().height())
	    );
            this.child(frame);

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    spinner (prm) {
        try {
	    if (true === comutl.isinc(prm,'Spinner')) {
                prm.effect(new HrzPos());
		prm.style({ 'position': 'relative', 'top':'0.18rem' });
	    }
            return this.innerComp('spinner', prm, Spinner);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    mainColor (prm,opt) {
        try {
            return this.spinner().mainColor(prm,opt);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

}
/* end of file */

