// Usamos dataform.projectConfig para leer el ID del proyecto definido en settings
const projectId = dataform.projectConfig.defaultDatabase;
const location = dataform.projectConfig.defaultLocation || "eu";

// Definimos solo el ID de la taxonomía y el ID de los tags
const TAXONOMY_ID = "4100421680814808498";
const EMAIL_TAG_ID = "5621242177616953613";
const PII_TAG_ID = "4494531221933985111";
const PHONE_TAG_ID = "2095525315087883728";
const CARD_TAG_ID = "8363037665874512910";

// Exportamos una función o una constante ya construida
const emailPolicy = `projects/${projectId}/locations/${location}/taxonomies/${TAXONOMY_ID}/policyTags/${EMAIL_TAG_ID}`;
const piiPolicy = `projects/${projectId}/locations/${location}/taxonomies/${TAXONOMY_ID}/policyTags/${PII_TAG_ID}`;
const phonePolicy = `projects/${projectId}/locations/${location}/taxonomies/${TAXONOMY_ID}/policyTags/${PHONE_TAG_ID}`;
const cardPolicy = `projects/${projectId}/locations/${location}/taxonomies/${TAXONOMY_ID}/policyTags/${CARD_TAG_ID}`;

module.exports = { 
    emailPolicy,
    piiPolicy,
    phonePolicy,
    cardPolicy
};