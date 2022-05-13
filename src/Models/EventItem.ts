import Href from "./Href";

/**
 * transaction: Transação simples
 * transaction_reversed: Transação revertida/cancelada
 * bill_flow_closed: Fatura fechada
 * bill_flow_paid: Fatura paga
 * payment: Confirmação de pagamento da fatura
 * top_up: Recarga de celular
 * bill_flow_on_one_day_to_due_date: Aviso de um dia para vencimento
 * anticipate_event: Parcela antecipada,
 * customer_password_changed: Senha da conta alterada
 * account_limit_set: limite alterado DEPRECATED
 * card_activated: Cartão ativado
 * customer_device_authorized: Dispositivo autorizado
 * due_day_changed: Data de vencimento alterada
 * initial_account_limit: Limite inicial da conta
 */
export enum EventCategory {
    TRANSACTION = 'transaction',
    TRANSACTION_REVERSED = 'transaction_reversed',
    BILL_CLOSED = 'bill_flow_closed',
    BILL_PAID = 'bill_flow_paid',
    PAYMENT = 'payment',
    TOP_UP = 'top_up',
    ONE_DAY_TO_DUE_DATE = 'bill_flow_on_one_day_to_due_date',
    ANTICIPATE_EVENT = 'anticipate_event',
    PASSWORD_CHANGED = 'customer_password_changed',
    LIMIT_SET = 'account_limit_set',
    CARD_ACTIVATED = 'card_activated',
    DEVICE_AUTHORIZED = 'customer_device_authorized',
    DUE_DATE_CHANGED = 'due_day_changed',
    INITIAL_LIMIT = 'initial_account_limit',
    TUTORIAL = 'tutorial',
    INVITATIONS_CHANGED = 'customer_invitations_changed',
    WELCOME = 'welcome'
}

export interface EventItem {
    description?: string,
    category: EventCategory,
    amount?: number,
    time: string,
    source?: string,
    title: string,
    amount_without_iof?: number,
    account?: string,
    details?: {
        status: string,
        subcategory: string,
        fx?: {
            currency_origin: string,
            amount_origin: number,
            amount_usd: number,
            precise_amount_origin: string,
            precise_amount_usd: string,
            exchange_rate: number
        }
    },
    id: string,
    _links?: {
        self: Href
    },
    tokenized?: boolean,
    href?: string
}