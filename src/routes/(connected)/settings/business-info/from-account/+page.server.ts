import type { PageServerLoad, Actions } from './$types';

export const actions: Actions = {
    save: async ({ request, locals }) => {

    }}

async function getUserEntity(user, locals) {
    try {
        const { data, error } = await locals.supabase
        .from('entities_profile')
        .select('euid')
        .eq('uuid', user)
        .single();

        return data.euid
    }
    catch(error) {
        console.log('err', error);
    }
}

async function getEntity(euid, locals) {
    try {
        const { data, error } = await locals.supabase
        .from('entities')
        .select('*, currencies (id, code, name)')
        .eq('euid', euid)
        .single();

        return data
    }
    catch(error) {
        console.log('err', error);
    }
}

export const load = (async ({ locals }) => {
    const session = await locals.getSession();
    const user = session?.user.id;

    const euid = await getUserEntity(user, locals);
    const entity = await getEntity(euid, locals);
    
    return { entity }
}) satisfies PageServerLoad;