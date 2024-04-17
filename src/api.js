export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "failed to fetch vans.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getVanById(id) {
  const res = await fetch(`/api/vans/${id}`);
  if (!res.ok) {
    throw {
      message: `failed to fetch van with the id number of ${id}.`,
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVans(hostId) {
  const res = await fetch("api/host/vans");
  if (!res.ok) {
    throw {
      message: "failed to fetch host.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function getHostVanById(hostId, vanId) {
  const res = await fetch(`/api/host/vans/${vanId}`);
  if (!res.ok) {
    throw {
      message: `failed to fetch van with Id of ${vanId}.`,
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(credential) {
  try {
    const res = await fetch(`/api/login`, {
      method: "POST",
      body: JSON.stringify(credential),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    throw err.message;
  }
}
