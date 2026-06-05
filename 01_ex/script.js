/**
 * 여행지 데이터 정의
 */
const regions = [
    {
        id: 'jeju',
        name: '제주도',
        info: '푸른 바다와 한라산의 정취를 느낄 수 있는 곳입니다. 올레길을 따라 걸으며 바람의 소리에 귀를 기울여보세요.',
        location: '제주특별자치도 제주시/서귀포시 일대'
    },
    {
        id: 'gyeongju',
        name: '경주',
        info: '천년의 역사가 살아 숨 쉬는 도시입니다. 밤의 동궁과 월지를 거닐며 고요한 역사의 밤을 만끽해보세요.',
        location: '경상북도 경주시'
    },
    {
        id: 'gangneung',
        name: '강릉',
        info: '짙은 바다 향기와 커피 향이 어우러진 곳입니다. 안목해변에서 파도 소리를 배경 삼아 따뜻한 커피 한 잔의 여유를 가져보세요.',
        location: '강원도 강릉시'
    },
    {
        id: 'namhae',
        name: '남해',
        info: '다랭이논과 푸른 남해바다가 어우러져 한 폭의 그림 같은 풍경을 자랑합니다. 조용한 어촌 마을에서 진정한 휴식을 즐기세요.',
        location: '경상남도 남해군'
    }
];

const regionList = document.getElementById('region-list');
const detailView = document.getElementById('detail-view');

/**
 * 지역 선택 버튼 생성 및 이벤트 바인딩
 */
regions.forEach(region => {
    const btn = document.createElement('button');
    btn.classList.add('region-btn');
    btn.textContent = region.name;
    btn.addEventListener('click', () => updateView(region, btn));
    regionList.appendChild(btn);
});

/**
 * 선택된 지역의 상세 정보를 화면에 렌더링
 */
function updateView(region, selectedBtn) {
    // 모든 버튼의 활성화 상태(active 클래스) 제거
    document.querySelectorAll('.region-btn').forEach(btn => btn.classList.remove('active'));
    selectedBtn.classList.add('active');

    // 부드러운 전환 효과를 위해 투명도 조절
    detailView.style.opacity = '0';

    setTimeout(() => {
        detailView.innerHTML = `
            <div class="detail-content">
                <h2>${region.name}</h2>
                <p>${region.info}</p>
                <div class="map-placeholder">
                    <p>📍 위치: ${region.location}</p>
                </div>
                <p style="color: #888; font-size: 0.85rem; margin-top: 20px;">
                    * 이 추천은 계절과 날씨의 흐름을 반영하여 제안되었습니다.
                </p>
            </div>
        `;
        detailView.style.opacity = '1';
    }, 250);
}