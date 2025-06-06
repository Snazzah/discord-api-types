/**
 * Types extracted from https://discord.com/developers/docs/topics/permissions
 */

import type { Permissions, Snowflake } from '../../globals.ts';

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object}
 */
export interface APIRole {
	/**
	 * Role id
	 */
	id: Snowflake;
	/**
	 * Role name
	 */
	name: string;
	/**
	 * Integer representation of hexadecimal color code
	 */
	color: number;
	/**
	 * If this role is pinned in the user listing
	 */
	hoist: boolean;
	/**
	 * The role icon hash
	 */
	icon?: string | null;
	/**
	 * The role unicode emoji as a standard emoji
	 */
	unicode_emoji?: string | null;
	/**
	 * Position of this role
	 */
	position: number;
	/**
	 * Permission bit set
	 *
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	permissions: Permissions;
	/**
	 * Whether this role is managed by an integration
	 */
	managed: boolean;
	/**
	 * Whether this role is mentionable
	 */
	mentionable: boolean;
	/**
	 * The tags this role has
	 */
	tags?: APIRoleTags;
	/**
	 * Role flags
	 */
	flags: RoleFlags;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export interface APIRoleTags {
	/**
	 * The id of the bot this role belongs to
	 */
	bot_id?: Snowflake;
	/**
	 * Whether this is the guild's premium subscriber role
	 */
	premium_subscriber?: null;
	/**
	 * The id of the integration this role belongs to
	 */
	integration_id?: Snowflake;
	/**
	 * The id of this role's subscription sku and listing
	 */
	subscription_listing_id?: Snowflake;
	/**
	 * Whether this role is available for purchase
	 */
	available_for_purchase?: null;
	/**
	 * Whether this role is a guild's linked role
	 */
	guild_connections?: null;
}

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * Role can be selected by members in an onboarding prompt
	 */
	InPrompt = 1 << 0,
}
