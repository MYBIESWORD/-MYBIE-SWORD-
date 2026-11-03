# MYBIE SWORD — Security and Operational Procedures

## 1. Purpose and Implementation Status

This document defines minimum security and operational controls for MYBIE SWORD accounts, project information, community operations, and digital assets.

**Important:** Publishing this procedure does not prove that every control is already configured or active. Each control must be implemented, assigned to an owner, and periodically checked before it is described publicly as operational.

Never place seed phrases, private keys, passwords, recovery codes, API tokens, or other secrets in this repository, public messages, screenshots, or ordinary project documents.

## 2. Security Principles

- **Least privilege:** Give each person only the access needed for their assigned task.
- **Separation of duties:** Community, publishing, financial, and wallet-signing permissions should be separated wherever practical.
- **Individual accountability:** Use individual accounts and attributable actions; avoid shared logins.
- **Defense in depth:** Use multiple protective controls rather than relying on one password or device.
- **Recoverability:** Prepare safe recovery steps before an incident occurs.
- **Evidence-based status:** Record whether a control is planned, configured, tested, or independently reviewed.

## 3. Account Security

For every official account, including GitHub, X, Telegram, and project email:

1. Use a unique, strong password stored in a reputable password manager.
2. Enable multi-factor authentication (MFA), preferably an authenticator app or hardware security key where supported.
3. Secure the recovery email and phone number with equivalent protections.
4. Review active sessions, connected applications, authorized devices, and recovery methods periodically.
5. Remove unknown sessions and revoke unused or suspicious application permissions.
6. Keep recovery codes offline in a secure location accessible only to the authorized account owner.
7. Do not share passwords or one-time codes through chat.
8. Use a dedicated, updated device for sensitive administration where feasible.

If a platform supports role-based access, grant named users only the permissions required. Do not give every moderator owner or administrator privileges.

## 4. Wallet and Key Management

### 4.1 Wallet separation

Before launch or custody of project funds, document the purpose and owner of each project-controlled wallet. Separate, where applicable:
- Operational wallet for limited routine activity.
- Treasury or reserve wallet for project-held assets.
- Deployment or authority wallet for technical actions.

These are recommended categories, not a statement that such wallets currently exist.

### 4.2 Key protection

- Never send a seed phrase or private key to any person, moderator, contributor, support agent, or AI assistant.
- Never store secrets in GitHub, cloud notes, email, screenshots, or shared documents.
- Use secure offline backups and protect them against theft, loss, fire, and unauthorized access.
- Consider hardware-wallet protection for material holdings and sensitive signing authority.
- Verify the destination address, network, amount, and transaction details before signing.
- Test a new address with a small transaction when appropriate before transferring material value.
- Never sign an unfamiliar transaction merely because someone claims it is required for verification or support.

A public wallet address is not a secret, but publishing it may reveal financial activity. Decide and document disclosure before using it publicly.

### 4.3 Multiple approvals

For material project funds, use multi-signature or another independent approval arrangement when technically and operationally feasible. Define signers, thresholds, recovery, and replacement procedures before funds are deposited. If a single-person arrangement is temporarily unavoidable, disclose the limitation internally and minimize the funds exposed.

## 5. Access Lifecycle

### Granting access
1. Confirm the person's identity and appointment through an authorized channel.
2. Define the exact task and required permission.
3. Enable MFA and individual access.
4. Record who approved the access and when.
5. Set a review date.

### Reviewing access
Review access at least quarterly and whenever a role, device, or responsibility changes. Check account sessions, repository collaborators, bot permissions, connected applications, and wallet signers.

### Removing access
When a person leaves a role or no longer needs access:
1. Revoke account, repository, bot, and application access promptly.
2. Remove sessions and recovery methods they controlled.
3. Rotate any shared credential that may have been exposed.
4. Review recent activity for unauthorized changes.
5. Record completion without recording the new secret itself.

## 6. GitHub and Repository Safety

- Keep the repository free of credentials, private keys, seed phrases, and personal data.
- Use individual GitHub accounts and MFA.
- Limit write and administrative permissions to trusted maintainers.
- Review proposed changes before merging, especially code, scripts, dependencies, and security-sensitive documentation.
- Use branch protection and required reviews when the project configuration and team size make them practical.
- Review unexpected commits, collaborator changes, workflow changes, and third-party application permissions.
- If a secret is committed, treat it as compromised: revoke or rotate it immediately. Deleting the visible text or commit does not make the secret safe again.

## 7. Official Communications and Community Safety

- Publish important announcements only through verified official accounts.
- Require approval for launch details, token distribution claims, partnerships, financial statements, and security incidents.
- Never ask community members to send funds, connect wallets, or reveal credentials as a condition of support.
- Clearly label rumors, proposals, and unverified information.
- Report impersonation, phishing, and malicious links through platform tools and internal escalation channels.
- Preserve evidence safely; do not expose member personal information or sensitive incident details.

## 8. Change Management

For material changes to wallets, account ownership, token configuration, smart contracts, official links, or repository permissions:
1. Describe the proposed change and its reason.
2. Assess security, operational, and community impact.
3. Obtain approval from the authorized decision-maker.
4. Have a second qualified person review the change when feasible.
5. Back up relevant non-secret configuration and document a recovery plan.
6. Implement the change.
7. Verify the result and record the evidence.

Emergency changes may be made to contain immediate harm, but must be documented and reviewed afterward.

## 9. Incident Response

An incident may include account compromise, exposed credentials, suspicious wallet activity, malicious code, phishing, unauthorized publication, or loss of access.

### Immediate response
1. **Stop the harm:** Stop using the suspected compromised account, device, application, or wallet workflow.
2. **Protect access:** From a trusted device, revoke sessions and application permissions, change affected passwords, and rotate exposed credentials. Do not delete evidence before it is preserved where safe.
3. **Protect assets:** If a wallet key may be compromised, treat that wallet as unsafe. Use a clean device and a pre-planned recovery approach; seek qualified help for significant assets. Never share the old or new seed phrase with anyone.
4. **Escalate:** Notify the authorized project representative through a separate, trusted communication channel.
5. **Preserve evidence:** Record timestamps, affected accounts, transaction signatures, public addresses, and relevant messages. Do not record secret credentials.
6. **Communicate carefully:** Publish a warning through verified channels when community members may be at risk. State confirmed facts, actions taken, and what members should avoid.
7. **Recover and review:** Restore access safely, remove persistence or malicious permissions, verify systems, and document corrective actions.

Do not promise that funds can be recovered. Do not speculate publicly about an attacker or the cause before evidence is reviewed.

## 10. Incident Severity and Escalation

| Severity | Example | Required response |
| --- | --- | --- |
| Critical | Suspected wallet key exposure, unauthorized fund movement, compromised owner account | Immediate containment and direct escalation to the authorized project representative |
| High | Official account takeover, malicious announcement, active phishing campaign | Restrict affected access, warn potentially affected members, preserve evidence, escalate immediately |
| Medium | Impersonation, repeated scam attempts, suspicious application permission | Report, remove or restrict within authority, review related access |
| Low | Routine spam or isolated guideline violation | Apply normal moderation and record if repeated |

When uncertain, treat the incident as the higher severity until assessed.

## 11. Operational Records

Maintain a restricted operational register containing:
- Account or system name (never its password or secret).
- Responsible role owner.
- Access granted and approval date.
- MFA and recovery-control status (do not store recovery codes).
- Last access review date.
- Incident reference and remediation status.

Keep records access-limited and retain only information needed for security and accountability.

## 12. Testing and Review

At least quarterly, and after material changes:
- Review account sessions and authorized applications.
- Confirm MFA and recovery methods remain available.
- Review repository collaborators and permissions.
- Review wallet ownership records and signer arrangements without exposing keys.
- Test incident contacts and escalation steps.
- Confirm former team members no longer have access.
- Record gaps and assign corrective actions.

A procedure is not considered tested merely because it is written.

## 13. Limitations

These procedures are a baseline and do not guarantee security. They are not a smart-contract audit, penetration test, custody certification, or legal opinion. High-value custody, smart-contract deployment, and complex incident response should receive qualified independent review.

## 14. Final Standard

Security is an ongoing operational responsibility. It must be implemented, tested, reviewed, and improved—not merely promised.

**One House. Multiple Sword Coins. One Standard.**

⚔️ **MYBIE SWORD**
*More Memes. Bigger Dreams.*
