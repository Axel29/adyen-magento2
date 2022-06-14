/**
 *
 * Adyen Payment module (https://www.adyen.com/)
 *
 * Copyright (c) 2019 Adyen BV (https://www.adyen.com/)
 * See LICENSE.txt for license details.
 *
 * Author: Adyen <magento@adyen.com>
 */
/*browser:true*/
/*global define*/
define([
    'jquery',
    'Magento_Vault/js/view/payment/method-renderer/vault'
], function ($, VaultComponent) {
    'use strict';

    return VaultComponent.extend({
        defaults: {
            template: 'Adyen_Payment/payment/payment-method-vault-form'
        },
        /**
         * Get card type
         * @returns {String}
         */
        getPaymentMethodType: function () {
            return this.details.type;
        },

        /**
         * Get expiration date
         * @returns {String}
         */
        getCreatedDate: function () {
            return this.details.created;
        },
        /**
         * @returns {String}
         */
        getToken: function () {
            return this.publicHash;
        },
        /**
         * @param {String} type
         * @returns {Boolean}
         */
        getIcons: function (type) {
            return this.details.icon;
        }
    });
});
