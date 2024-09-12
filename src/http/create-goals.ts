interface CreateGoalsRequest {
    title: String,
    desiresWeekLyFrequency: number,
}

export async function createGoal({title, desiresWeekLyFrequency}: CreateGoalsRequest) {
    await fetch("http://localhost:3333/goals", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            desiresWeekLyFrequency,
        })
    })
   
}