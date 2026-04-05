export default function ModelOverview() {
  return (
    <section className="models">
      <div className="models__inner">
        <div className="models__header">
          <h2 className="models__title">Claude Codeで使えるモデル</h2>
          <p className="models__lead">
            用途に応じて3つのモデルを使い分けることで、<br className="pc-only" />
            コストと性能を最適化できます
          </p>
        </div>

        <div className="models__table-wrap">
          <table className="models__table">
            <thead>
              <tr>
                <th className="models__th models__th--empty" />
                <th className="models__th models__th--opus">
                  <span className="models__badge models__badge--opus">最高性能</span>
                  <span className="models__model-name">Opus</span>
                  <span className="models__model-id">claude-opus-4</span>
                </th>
                <th className="models__th models__th--sonnet">
                  <span className="models__badge models__badge--sonnet">バランス型</span>
                  <span className="models__model-name">Sonnet</span>
                  <span className="models__model-id">claude-sonnet-4</span>
                </th>
                <th className="models__th models__th--haiku">
                  <span className="models__badge models__badge--haiku">高速・低コスト</span>
                  <span className="models__model-name">Haiku</span>
                  <span className="models__model-id">claude-haiku-4</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="models__label">コーディング能力</td>
                <td className="models__cell"><span className="models__meter models__meter--5" /><span className="models__val">最高</span></td>
                <td className="models__cell"><span className="models__meter models__meter--4" /><span className="models__val">高い</span></td>
                <td className="models__cell"><span className="models__meter models__meter--3" /><span className="models__val">標準</span></td>
              </tr>
              <tr>
                <td className="models__label">応答速度</td>
                <td className="models__cell"><span className="models__meter models__meter--3" /><span className="models__val">標準</span></td>
                <td className="models__cell"><span className="models__meter models__meter--4" /><span className="models__val">速い</span></td>
                <td className="models__cell"><span className="models__meter models__meter--5" /><span className="models__val">最速</span></td>
              </tr>
              <tr>
                <td className="models__label">コスト</td>
                <td className="models__cell"><span className="models__cost">$$$</span></td>
                <td className="models__cell"><span className="models__cost">$$</span></td>
                <td className="models__cell"><span className="models__cost">$</span></td>
              </tr>
              <tr>
                <td className="models__label">コンテキスト</td>
                <td className="models__cell"><span className="models__val">200K</span></td>
                <td className="models__cell"><span className="models__val">200K</span></td>
                <td className="models__cell"><span className="models__val">200K</span></td>
              </tr>
              <tr>
                <td className="models__label">得意な用途</td>
                <td className="models__cell models__cell--use">複雑なアーキテクチャ設計、大規模リファクタリング</td>
                <td className="models__cell models__cell--use">日常的な開発、コードレビュー、テスト生成</td>
                <td className="models__cell models__cell--use">コード補完、簡単な修正、ドキュメント生成</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="models__note">
          <p>研修では全モデルを実際に使い分ける実践演習を行います。<br className="pc-only" />目的に応じた最適なモデル選択ができるスキルを身につけます。</p>
        </div>
      </div>
    </section>
  );
}
