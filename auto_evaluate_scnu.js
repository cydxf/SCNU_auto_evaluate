function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function autoEvaluate() {
    try {
        const rows = $('#tempGrid>tbody').children("tr");
        const lens = rows.length;
        console.log(`Total rows: ${lens}`);
        
        for (let i = 1; i < lens; i++) {
            console.log(`Processing row ${i}`);
            $(`#${i}`).click();
            let attempts = 0;
            const maxAttempts = 200;  // 总尝试次数上限
            const waitTime = 50;  // 每次等待50毫秒

            while ($(':radio[data-dyf=98]').length === 0) {
                await sleep(waitTime);  // 等待50毫秒
                attempts += 1;
                if (attempts > maxAttempts) {  // 如果尝试次数超过200次
                    alert("请检查网络连接或页面加载问题");
                    throw new Error("Timeout: Unable to find the radio button.");
                }
                console.log(`Attempt ${attempts}: Waiting for radio buttons to appear...`);
            }

            console.log(`Found radio buttons for row ${i}`);
            $(':radio[data-dyf=98]').prop('checked', true);
            $(':radio[data-dyf=80]').eq(0).prop('checked', true);

            console.log(`Submitting evaluation for row ${i}`);
            const submitButton = $(':button[id=btn_xspj_bc]');
            if (submitButton.length === 0) {
                console.error(`Submit button not found for row ${i}`);
                throw new Error(`Submit button not found for row ${i}`);
            }
            submitButton.data("enter", "1");
            submitButton.click();
            await sleep(500);  // 等待提交操作完成
        }

        console.log("Finalizing evaluations");
        const finalizeButton = $(':button[id=btn_ok]');
        if (finalizeButton.length === 0) {
            console.error("Finalize button not found");
            throw new Error("Finalize button not found");
        }
        finalizeButton.click();
        console.log("Evaluations completed successfully");

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

autoEvaluate().catch(error => {
    console.error('Unhandled error:', error);
});